"use server";
import Email from "@/emails";
import { resend } from "./resend";
import { FormData } from "@/types/type";

export const SendContact = async (dataForm: FormData) => {
  const { data, error } = await resend.emails.send({
    from: "contact@chrisnutrition.com",
    to: "Chris.coachingnutrition@gmail.com",
    subject: "Formulaire de contact ChrisNutrition",
    react: Email(dataForm),
  });

  if (error) {
    console.log(error);
  }
  console.log(data);
};
