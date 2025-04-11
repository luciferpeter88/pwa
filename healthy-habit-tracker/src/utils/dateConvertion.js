export default function dateConversation() {
  return {
    currentDate: () => new Date().toISOString().split("T")[0],
    currentTime: () =>
      new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }),
  };
}
