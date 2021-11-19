export const LayoutItem = ({product}: any) => {
  return (
    <>
      <p key={product.id}>{product.title}</p>
    </>
  );
};
