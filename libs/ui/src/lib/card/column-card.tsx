export interface ColumnCardProps {
  cardImage?: any;
  noBorder: boolean;
}

export function ColumnCard({ cardImage, noBorder }: ColumnCardProps) {
  return (
    <div className={`${!noBorder && 'shadow-md rounded-md'} overflow-hidden`}>
      {cardImage && <img src={cardImage} alt="card" width={'350px'} height={'200px'} />}

      <div className="p-5">
        <h5 className="text-xl font-semibold mb-2">Card title</h5>

        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi tenetur, voluptatibus harum consequuntur
          alias quaerat excepturi temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores dolorem
          assumenda totam?
        </p>

        <button
          className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default ColumnCard;
