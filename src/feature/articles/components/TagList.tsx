import Label from "@/components/label/Label";

interface Props {
  tagList?: (string | null)[] | null;
}

const TagList = ({ tagList }: Props) => {
  if (!tagList) return <></>;

  return (
    <>
      {tagList.map((tag, i) => (
        <Label key={`tag-${i}`} text={tag || ""} />
      ))}
    </>
  );
};
export default TagList;
