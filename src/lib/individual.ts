import { supabase } from "./supabaseClient";

export const uploadDocument = async (
  file: File,
  userId: string,
  folder: string
) => {
  const filePath = `${folder}/${userId}-${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("membership-documents")
    .upload(filePath, file, { upsert: true });

  if (error) throw error;

  return data.path;
};

export const submitMembershipApplication = async (payload: any) => {
  const { error } = await supabase
    .from("membership_applications")
    .insert(payload);

  if (error) throw error;
};
