

const RenderingList = () => {
    const fruit = ["Banana","Apple", "Orange","Pineapple"]
    const listItems = fruit.map(fruits => <li>{fruits}</li>)
  return (
       <div>
        <ul>{listItems}</ul>
       </div>
  )
}

export default RenderingList