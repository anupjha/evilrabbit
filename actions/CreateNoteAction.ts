export async function createNote(note: Note) {
  return prisma.note.create({
    data: note,
  });
}
