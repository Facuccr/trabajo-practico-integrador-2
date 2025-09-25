import { Schema, model } from "mongoose";

const tagSchema = new Schema(
  {
    name: {
      type: String,

      minlength: 2,
      maxlength: 30,
      trim: true,
      required: true,
    },
    description: { type: String, maxlength: 200 },
  },
  { timestamps: true, versionKey: false }
);
tagSchema.virtual("articles", {
  ref: "Article",
  localField: "_id",
  foreignField: "tags",
});
tagSchema.set("toJSON", { virtuals: true });
export const tagModel = model("Tag", tagSchema);
// 3. Tag (Etiqueta)
// ● _id (ObjectId automático)
// ● name (String, único, 2-30 caracteres, sin espacios)
// ● description (String, opcional, máximo 200 caracteres)
// ● createdAt (Date)
// ● updatedAt (Date)
