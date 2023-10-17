import data from "@/data.json";

export const courseOptions = data.courses.map((course) => ({
  value: course.id,
  label: course.title,
}));
