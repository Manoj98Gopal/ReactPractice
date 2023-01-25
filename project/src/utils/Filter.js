
export const filterFunction = (term,array) => {
  
    const filterCard = array.filter((cur) => cur?.data?.name?.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  
    return filterCard;
  
  }