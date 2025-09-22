import { Schema, Types } from "mongoose";

const commetSchema = new Schema(
  {
    content: { type: String, required: true, minlength: 5, maxlength: 500 },
    author: { type: Types.ObjectId, ref: "User" },
    article: { type: Types.ObjectId, ref: "Article" },
  },
  { timestamps: true, versionKey: false }
);

export const commentModel = model("Comment", commetSchema);

// 4. Comment (Comentario) - Nuevo modelo
// ● _id (ObjectId automático)
// ● content (String, 5-500 caracteres)
// ● author (ObjectId, referencia a User)
// ● article (ObjectId, referencia a Article - relación 1:N)
// ● createdAt (Date)
// ● updatedAt (Date)
