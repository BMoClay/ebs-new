// ... existing code ...
<div className="flex flex-col gap-4">
  <div className="flex items-baseline border-b-[2px]"> 
    <Link to={`books/1`} className=""> 
      <img src={books[0].logo} className="w-10 h-9"></img> 
      <h1 className="px-0.5 text-xs">{books[0].year}</h1> 
    </Link> 
    <Link to={`books/2`} className="">   
      <img src={books[1].logo} className="w-10 h-9"></img> 
      <h1 className="px-0.5 text-xs">{books[1].year}</h1> 
    </Link> 
  </div>
  <div className="flex items-baseline border-b-[2px]"> 
    <Link to={`books/3`} className=""> 
      <img src={books[2].logo} className="w-10 h-9"></img> 
      <h1 className="px-0.5 text-xs">{books[2].year}</h1> 
    </Link> 
    <Link to={`books/4`} className="">   
      <img src={books[3].logo} className="w-10 h-9"></img> 
      <h1 className="px-0.5 text-xs">{books[3].year}</h1> 
    </Link> 
  </div>
  <div className="flex items-baseline border-b-[2px]"> 
    <Link to={`books/5`} className=""> 
      <img src={books[4].logo} className="w-10 h-9"></img> 
      <h1 className="px-0.5 text-xs">{books[4].year}</h1> 
    </Link> 
    <Link to={`books/6`} className="">   
      <img src={books[5].logo} className="w-10 h-9"></img> 
      <h1 className="px-0.5 text-xs">{books[5].year}</h1> 
    </Link> 
  </div>
</div>
// ... existing code ...