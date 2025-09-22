import { Schema } from "mongoose";
import { type } from "os";

const tagSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      minlength: 2,
      maxlength: 30,
      trim: true,
      required: true,
    },
    description: { type: String, maxlength: 200 },
  },
  { timestamps: true, versionKey: false }
);

export const tagModel = model("Tag", tagSchema);
// 3. Tag (Etiqueta)
// ● _id (ObjectId automático)
// ● name (String, único, 2-30 caracteres, sin espacios)
// ● description (String, opcional, máximo 200 caracteres)
// ● createdAt (Date)
// ● updatedAt (Date)
