import LinesEllipsis from 'react-lines-ellipsis'

export default function Video({ title, noq, id }) {
  return (
    <>
      <div className="container">
        <div className="w-[350px] pb-4 max-h-fit p-2 cursor-pointer border">
          <img
            className="w-full object-cover"
            src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt=""
          />
          <h6 className="my-2">
          <LinesEllipsis
            text={title}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
           />
          </h6>
          <div className="flex mx-1 justify-between">
            <p>{noq} Question</p>
            <p>Score: {noq * 5}</p>
          </div>
        </div>
      </div>
    </>
  );
}
