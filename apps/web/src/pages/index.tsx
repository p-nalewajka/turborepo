import * as React from "react";
import type { PageProps } from "gatsby";
import { Button } from "ui";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Button onClick={()=> { console.log("button click"); }}>
         click me
      </Button>
    </main>
  );
};

export default IndexPage;
