import React from 'react';
import ListHome from '../components/ListHome';
import TarjetaCuadruple from '../components/TarjetaCuadruple';
import TarjetaSola from '../components/TarjetaSola';
import './styles/Home.scss';
const Home = () => {
  return (
    <div className="Home">
      <ListHome
        title="Las camisas que nuestros clientes prefieren"
        img1="https://i.pinimg.com/originals/1c/7d/83/1c7d83884e14f6b9242fb4482a422bdd.jpg"
        img2="https://ae01.alicdn.com/kf/HTB1X_M8aLfsK1RjSszbq6AqBXXav/Novedad-Original-de-2019-camisetas-NIKE-para-hombre-ropa-deportiva-de-manga-larga.jpg_q50.jpg"
        img3="https://www.madbasket.com/5872/camiseta-manga-larga-jordan-jumpman.jpg"
        img4="https://i.linio.com/p/6b3418afd26acbfa44c1baab46d2cbbb-catalog.jpg"
        img5="https://www.prolaboral.es/WebRoot/StoreES/Shops/63783229/5EE2/453B/BB78/9CA2/286D/0A0C/6D0E/E831/polo-mujer-mc-velilla-105509s-rojo_m.jpg"
        img6="https://i.pinimg.com/236x/cb/35/9b/cb359b544c142815dc83e5633d639e0d.jpg"
      />
      <ListHome
        title="Los zapatos que nuestros clientes prefieren"
        img1="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/wbewy4ljwc5ccapwkl5c/calzado-de-running-quest-2-zFzv4V.jpg"
        img2="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1582298103/454551_02JP0_9064_002_098_0000_Light-Zapatilla-Ace-con-bordado-para-mujer.jpg"
        img3="https://i.pinimg.com/originals/c0/49/14/c04914654b7a6aed1fe2fb247c64e700.jpg"
        img4="http://cdn.shopify.com/s/files/1/0450/6317/6348/products/high-top-jordan-basketball-shoes-mens-cushioning-light-basketball-sneakers-male-zapatos-hombre-breathable-outdoor-sports-shoes-692689_1200x1200.jpg?v=1601914002"
        img5="https://bestchineseproducts.com/wp-content/uploads/2019/07/nike-air-jordan-13.png"
        img6="https://assets.adidas.com/images/w_600,f_auto,q_auto/bb0c6918d4e2457e9826a82e0131af8f_9366/Cloudfoam_Pure_Shoes_White_DB0695_01_standard.jpg"
      />
      <div className="categorias_vendidas">
        <TarjetaSola title="Ropa para mujer" img="https://image.freepik.com/foto-gratis/mujer-saltando-feliz-bolsa_23-2148169933.jpg" />
        <TarjetaCuadruple
          title="Ropa para hombre"
          img1="https://i.pinimg.com/736x/c1/9c/b6/c19cb6b90430a4e2591dbb28c05c3369.jpg"
          subtitle1="Moda de verano"
          img2="https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-hipster-lumbersexual-empresario-modelo-hombre-vestido-ropa-chaqueta-jeans_158538-1736.jpg?size=626&ext=jpg&ga=GA1.2.1520075182.1601769600"
          subtitle2="Moda elegante"
          img3="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/massimo-dutti-hombre-oton-o-invierno-2019-1567808943.jpg"
          subtitle3="Moda de invierno"
          img4="https://site.innovasport.com/ux/rga-finales-innovasport/hombres/is-w4719-shopthelook-training-hombre.jpg"
          subtitle4="Moda Sport"
        />
        <TarjetaCuadruple
          title="Accesorios"
          img1="https://images-eu.ssl-images-amazon.com/images/G/30/handmade/2020/Gateway/Q4/ES_Discover_Decor_186X116._SY116_CB404321973_.jpg"
          subtitle1="Hogar y cocina"
          img2="https://images-eu.ssl-images-amazon.com/images/G/30/handmade/2020/Gateway/Q4/ES_Discover_Jewellery_186X116._SY116_CB404321973_.jpg"
          subtitle2="Joyería"
          img3="https://images-eu.ssl-images-amazon.com/images/G/30/handmade/2020/Gateway/Q4/ES_Discover_Kitchen_186X116._SY116_CB404321972_.jpg"
          subtitle3="Cocina y comedor"
          img4="https://images-eu.ssl-images-amazon.com/images/G/30/handmade/2020/Gateway/Q4/ES_Discover_Baby_186X116._SY116_CB404321972_.jpg"
          subtitle4="Bebé"
        />
        <TarjetaSola
          title="Medidas contra COVID0"
          img="https://image.freepik.com/foto-gratis/mujer-saltando-mientras-sostiene-sus-bolsas-compras_23-2148302844.jpg"
        />
      </div>
      <ListHome
        title="Los mejores regalos para ella"
        img1="https://image.freepik.com/free-photo/young-european-couple-having-dinner-beautiful-restaurant-celebrating-valentine-s-day_242111-4583.jpg"
        img2="https://i.pinimg.com/736x/a5/86/32/a586324e96e06f544a7e65a3918841e5.jpg"
        img3="https://images-eu.ssl-images-amazon.com/images/G/30/Events/San_valentine/XCM_Manual_1304788_1559613_ES_VDAY21_es_gw_pc_bubble_shoveler_2x_es_es_3664332_200x200_1X_es_ES._CB660704167_.jpg"
        img4="https://data.whicdn.com/images/101028977/original.jpg"
        img5="https://image.freepik.com/free-photo/roses-wooden-table-with-gift-with-red-bow_23-2147591237.jpg"
        img6="https://image.freepik.com/free-photo/red-coffee-cup-with-scarf-seen-from_23-2147591268.jpg"
      />
    </div>
  );
};

export default Home;
