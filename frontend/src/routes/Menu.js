import React from 'react'
import "../styling/Menu.css"; 

const Menu = () => {
  return (
  <>
    <h1 className="menu-title">Menu</h1>
      
      <div className="menu-section">
        <h2>Pan Dulce</h2>

        <div className="menu-item">
          <h3>Conchas</h3>
          <div className="contact-image">
                <img src={`${process.env.PUBLIC_URL}/concha.jpg`} alt="Bakery items" />
            </div>
          <p>A Mexican classic! Soft, airy buns with a hint of cinnamon, crowned with a colorful, crunchy cookie topping. Available in a variety of flavors: vanilla, chocolate, unicorn, and even mini conchas for a bite-sized delight.</p>
        </div>

        <div className="menu-item">
          <h3>Cuerno De Queso</h3>
          <div className="contact-image">
                <img src={`${process.env.PUBLIC_URL}/cuernodequeso.jpg`} alt="Bakery items" />
            </div>
          <p>A delightfully tender, buttery pastry shaped like a horn and filled with smooth, sweet cream cheese. Perfect for a rich, satisfying treat with every bite.</p>
        </div>

        <div className="menu-item">
          <h3>Piernas De Queso</h3>
          <img src={`${process.env.PUBLIC_URL}/piernasdequeso.jpg`} alt="Bakery items" />
          <p>Pillowy rolls filled with creamy, sweet cheese. These are perfect for those who enjoy a touch of sweetness nestled within a soft, bread-like pastry.</p>
        </div>

        <div className="menu-item">
          <h3>Cuernos De Canela</h3>
          <img src={`${process.env.PUBLIC_URL}/cuernosdecanela.jpg`} alt="Bakery items" />
          <p>Infused with cinnamon warmth, this soft pastry is topped with a crunchy cookie layer and dusted with cinnamon sugar, creating a delightful contrast of textures.</p>
        </div>

        <div className="menu-item">
          <h3>Caracoles</h3>
          <img src={`${process.env.PUBLIC_URL}/caracol.jpg`} alt="Bakery items" />
          <p>Named after "snails" for their spiral shape, these pastries are filled with sweet cream cheese from edge to edge, making each bite as delicious as the last.</p>
        </div>

        <div className="menu-item">
          <h3>Panaderos</h3>
          <img src={`${process.env.PUBLIC_URL}/panaderos.jpg`} alt="Bakery items" />
          <p>Soft and aromatic, these cinnamon-spiced pastries are layered with a crunchy topping and coated in cinnamon sugar. A comforting treat with just the right amount of crunch.</p>
        </div>

        <div className="menu-item">
          <h3>Marranitos</h3>
          <img src={`${process.env.PUBLIC_URL}/maranitos.jfif`} alt="Bakery items" />
          <p>Shaped like little pigs, these soft cookies are spiced with cinnamon, anise, and molasses, offering a warm, homey flavor with each bite.</p>
        </div>

        <div className="menu-item">
          <h3>Piernas De Canela</h3>
          <img src={`${process.env.PUBLIC_URL}/pdecanela.jfif`} alt="Bakery items" />
          <p>A cinnamon-filled delight! These soft pastries are filled with sweet jam, dusted in cinnamon sugar for a perfect balance of flavors.</p>
        </div>

        <div className="menu-item">
          <h3>Girasól</h3>
          <img src={`${process.env.PUBLIC_URL}/girasol.jfif`} alt="Bakery items" />
          <p>Golden and tender, these pastries have a sweet cookie center surrounded by cinnamon-spiced layers, making them look like sunflowers and taste like sunshine.</p>
        </div>

        <div className="menu-item">
          <h3>Chamucos</h3>
          <img src={`${process.env.PUBLIC_URL}/chamuco.jfif`} alt="Bakery items" />
          <p>A soft, cinnamon-infused pastry topped with a crunchy cookie layer. These are ideal for anyone who loves a little extra texture in every bite.</p>
        </div>

        <div className="menu-item">
          <h3>Orejas</h3>
          <img src={`${process.env.PUBLIC_URL}/orejas.jpg`} alt="Bakery items" />
          <p>Crispy, caramelized layers of pastry dough baked to perfection. These "ears" offer a delightful crunch and a light sweetness with every nibble.</p>
        </div>

        <div className="menu-item">
          <h3>Manitas De Chocolate</h3>
          <img src={`${process.env.PUBLIC_URL}/manitas.jpg`} alt="Bakery items" />
          <p>Our caramelized "little hands" are crafted with crunchy pastry, fanned out and dipped in rich milk chocolate for an extra indulgent treat.</p>
        </div>

        <div className="menu-item">
          <h3>Ojos</h3>
          <img src={`${process.env.PUBLIC_URL}/ojo.jpg`} alt="Bakery items" />
          <p>A delightful pastry ring covered in sugar with a buttery, cake-like center. "Eyes" that will have you coming back for more.</p>
        </div>

      </div>
  </>
  )
}

export default Menu