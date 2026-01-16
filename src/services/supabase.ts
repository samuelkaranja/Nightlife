import { supabase } from "../supabase/supabaseClient";

// -------------------- DRINKS --------------------

// Add new drink
export const addDrink = async (data: {
  name: string;
  type: string;
  price: number;
  status: string;
  imageFile: File;
}) => {
  const fileExt = data.imageFile.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;
  const filePath = `public/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("Drinks")
    .upload(filePath, data.imageFile);

  if (uploadError) throw uploadError;

  const { data: imageData } = supabase.storage
    .from("Drinks")
    .getPublicUrl(filePath);

  const { error: insertError } = await supabase.from("Drinks").insert([
    {
      name: data.name,
      type: data.type,
      price: data.price,
      status: data.status,
      image_url: imageData.publicUrl,
    },
  ]);

  if (insertError) throw insertError;

  return { success: true };
};

// Fetch all drinks
export const fetchDrinks = async () => {
  const { data, error } = await supabase
    .from("Drinks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

// Delete a drink by id
export const deleteDrink = async (id: string) => {
  const { error } = await supabase.from("Drinks").delete().eq("id", id);
  if (error) throw error;
  return { success: true };
};

// Update drink
export const updateDrink = async (
  id: string,
  data: {
    name: string;
    type: string;
    price: number;
    status: string;
    imageFile?: File; // optional
    existingImageUrl?: string;
  }
) => {
  let imageUrl = data.existingImageUrl;

  // If a new image is provided → upload it
  if (data.imageFile) {
    const fileExt = data.imageFile.name.split(".").pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    const filePath = `public/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("Drinks")
      .upload(filePath, data.imageFile);

    if (uploadError) throw uploadError;

    const { data: imageData } = supabase.storage
      .from("Drinks")
      .getPublicUrl(filePath);

    imageUrl = imageData.publicUrl;
  }

  // Update record
  const { error } = await supabase
    .from("Drinks")
    .update({
      name: data.name,
      type: data.type,
      price: data.price,
      status: data.status,
      image_url: imageUrl,
    })
    .eq("id", id);

  if (error) throw error;

  return { success: true };
};

// Fetch single drink by ID
export const fetchDrinkById = async (id: string) => {
  const { data, error } = await supabase
    .from("Drinks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

// -------------------- GALLERY IMAGES --------------------

// Add new gallery image
export const addGalleryImage = async (file: File, title?: string) => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;
  const filePath = `public/${fileName}`;

  // Upload image
  const { error: uploadError } = await supabase.storage
    .from("Gallery")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  // Get public URL
  const { data } = supabase.storage.from("Gallery").getPublicUrl(filePath);

  // Insert DB record
  const { error: insertError } = await supabase.from("Gallery_Images").insert([
    {
      title: title || "",
      image_url: data.publicUrl,
    },
  ]);

  if (insertError) throw insertError;

  return { success: true };
};

// Fetch all gallery images
export const fetchGalleryImages = async () => {
  const { data, error } = await supabase
    .from("Gallery_Images")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

// Delete gallery image by id
export const deleteGalleryImage = async (id: string) => {
  const { error } = await supabase.from("Gallery_Images").delete().eq("id", id);
  if (error) throw error;
  return { success: true };
};
