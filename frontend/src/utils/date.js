export function format(dateString) {
  return new Date(dateString).toLocaleDateString().replaceAll("/", "-")
}
