export function formatDate(date?: string | null) {
  if (!date) return "";

  const convertDate = new Date(date);

  return `${convertDate.getFullYear()}년 ${
    convertDate.getMonth() + 1
  }월 ${convertDate.getDate()}일`;
}
