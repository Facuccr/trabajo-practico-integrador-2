import { Schema, Types } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: { type: String, minlength: 3, maxlength: 200, required: true },
    content: { type: String, minlength: 50, required: true },
    excerpt: { type: String, maxlength: 500 },
    status: {
      type: String,
      enum: ["published", "archived"],
      default: "published",
    },
    author: { type: Types.ObjectId, ref: "User" },
    tags: [{ type: Types.ObjectId, ref: "Tag" }],
  },
  { timestamps: true, versionKey: false }
);

export const articleModel = model("Article", ArticleSchema);

// 2. Article (Artículo)
// ● _id (ObjectId automático)
// ● title (String, 3-200 caracteres)
// ● content (String, mínimo 50 caracteres)
// ● excerpt (String, máximo 500 caracteres, opcional)

// ● status (String, enum: 'published', 'archived', default: 'published')
// ● author (ObjectId, referencia a User)
// ● tags (Array de ObjectIds, referencias a Tag - relación N:M)
// ● createdAt (Date)
// ● updatedAt (Date)
