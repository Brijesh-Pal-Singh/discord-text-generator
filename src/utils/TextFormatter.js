export function toggleBold(text) {
    return text.startsWith("**") && text.endsWith("**") 
      ? text.slice(2, -2) 
      : `**${text}**`;
  }
  
  export function toggleUnderline(text) {
    return text.startsWith("__") && text.endsWith("__") 
      ? text.slice(2, -2) 
      : `__${text}__`;
  }