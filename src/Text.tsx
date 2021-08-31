import { VFC } from "react";

type TextType = {
  color: string;
  fontSize: string;
};

export const Text: VFC<TextType> = (props: TextType) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
