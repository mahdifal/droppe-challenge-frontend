import * as React from "react";

const useDocumentTitle = (title: string) => {
  const [documentTitle, setDoucmentTitle] = React.useState<string>(title);

  React.useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return [documentTitle, setDoucmentTitle];
};

export { useDocumentTitle };
