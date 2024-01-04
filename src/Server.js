import { createServer, Model } from "miragejs";

createServer({
  models: {
    items: Model,
  },

  seeds(server) {
    server.create("item", {
      id: "1",
      name: "Scent",
      price: 60,
      description:
        "The scent of a pine forest is an intoxicating mix of fresh, earthy, and resinous notes. It's a complex aroma that can evoke a variety of feelings and memories, from the crispness of a winter morning to the cozy warmth of a crackling fire.!",
      imageUrl:
        "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "fashion",
    });

    server.create("item", {
      id: "2",
      name: "Camera",
      price: 80,
      description:
        "Explore the best of both worlds in video production and stills photography with the new EOS R5 C, a mirrorless hybrid camera with the capabilities of CINEMA EOS and EOS R system. A compact and lightweight system with 8K/60P resolution video recording is born. The all-new internal cooling fan system allows continuous internal recording in various file formats, including Cinema RAW Light, XF-AVC, and MP4.",
      imageUrl:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "electronic",
    });

    server.create("item", {
      id: "3",
      name: "TS-E50mm f/2.8L ",
      price: 100,
      description:
        "A large diameter, standard tilt-shift lens that boasts of wide tilting and shifting ranges of ±8.5° and ±12mm respectively and the ability to shoot macro images at 0.5x maximum magnification. Improved operability through features such as large tilt and shift knobs and a locking mechanism to prevent unintended movement provide powerful support for professional shooting purposes.",
      imageUrl:
        "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "electronic",
    });

    server.create("item", {
      id: "4",
      name: "Bleu de Chanel",
      price: 65,
      description:
        "BLEU DE CHANEL exudes accomplishment through a timeless and unexpected scent. This aromatic-woody perfume with a captivating trail embodies freedom with its strength and elegance, just like the man who wears it. The BLEU DE CHANEL fragrance is available in a complete line of shaving and grooming essentials.",
      imageUrl:
        "https://images.pexels.com/photos/9202894/pexels-photo-9202894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "fashion",
    });

    server.create("item", {
      id: "5",
      name: "Bleu de Chanel",
      price: 120,
      description:
        "BLEU DE CHANEL exudes accomplishment through a timeless and unexpected scent. This aromatic-woody perfume with a captivating trail embodies freedom with its strength and elegance, just like the man who wears it. The BLEU DE CHANEL fragrance is available in a complete line of shaving and grooming essentials.",
      imageUrl:
        "https://images.pexels.com/photos/3788293/pexels-photo-3788293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "fashion",
    });

    server.create("item", {
      id: "6",
      name: "Iphone 11",
      price: 70,
      description:
        "The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It was released in September 2019 and is the thirteenth generation of the iPhone.",
      imageUrl:
        "https://images.pexels.com/photos/10885666/pexels-photo-10885666.jpeg",
      cat: "phone",
    });
    server.create("item", {
      id: "7",
      name: "Video cam",
      price: 70,
      description:
        "A compact and lightweight system with 8K/60P resolution video recording is born. The all-new internal cooling fan system allows continuous internal recording in various file formats, including Cinema RAW Light, XF-AVC, and MP4",
      imageUrl:
        "https://images.pexels.com/photos/11953865/pexels-photo-11953865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "electronic",
    });
    server.create("item", {
      id: "8",
      name: "Iphone XR",
      price: 70,
      description:
        "a smartphone designed, developed, and marketed by Apple Inc. It was released in September 2019 and is the thirteenth generation of the iPhone..",
      imageUrl:
        "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "phone",
    });
    server.create("item", {
      id: "9",
      name: "Iphone SE",
      price: 70,
      description:
        "a smartphone designed, developed, and marketed by Apple Inc. It was released in September 2019 and is the thirteenth generation of the iPhone.",
      imageUrl:
        "https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "phone",
    });
    server.create("item", {
      id: "10",
      name: "nike Air",
      price: 70,
      description:
        "The Nike Air Force 1 is a true icon in the sneaker world. It's been a staple since its debut in 1982 and continues to be a popular choice for people of all ages and styles. Here's what you need to know about the Air Force 1",
      imageUrl:
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "fashion",
    });
    server.create("item", {
      id: "11",
      name: "analog watch",
      price: 10,
      description:
        "The Nike Air Force 1 is a true icon in the sneaker world. It's been a staple since its debut in 1982 and continues to be a popular choice for people of all ages and styles. Here's what you need to know about the Air Force 1",
      imageUrl:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "electronic",
    });
    server.create("item", {
      id: "12",
      name: " watch",
      price: 38,
      description:
        "The Nike Air Force 1 is a true icon in the sneaker world. It's been a staple since its debut in 1982 and continues to be a popular choice for people of all ages and styles. Here's what you need to know about the Air Force 1",
      imageUrl:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "electronic",
    });
    server.create("item", {
      id: "13",
      name: " beat headphone",
      price: 19,
      description:
        "The Nike Air Force 1 is a true icon in the sneaker world. It's been a staple since its debut in 1982 and continues to be a popular choice for people of all ages and styles. Here's what you need to know about the Air Force 1",
      imageUrl:
        "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "electronic",
    });
    server.create("item", {
      id: "14",
      name: " shoes",
      price: 199,
      description:
        "The Nike Air Force 1 is a true icon in the sneaker world. It's been a staple since its debut in 1982 and continues to be a popular choice for people of all ages and styles. Here's what you need to know about the Air Force 1",
      imageUrl:
        "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "fashion",
    });
    server.create("item", {
      id: "15",
      name: "nike cap",
      price: 10,
      description:
        "The Nike Air Force 1 is a true icon in the sneaker world. It's been a staple since its debut in 1982 and continues to be a popular choice for people of all ages and styles. Here's what you need to know about the Air Force 1",
      imageUrl:
        "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "fashion",
    });
    server.create("item", {
      id: "16",
      name: "nike",
      price: 55,
      description:
        "The Nike Air Force 1 is a true icon in the sneaker world. It's been a staple since its debut in 1982 and continues to be a popular choice for people of all ages and styles. Here's what you need to know about the Air Force 1",
      imageUrl:
        "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "fashion",
    });
    server.create("item", {
      id: "17",
      name: "nike white",
      price: 49,
      description:
        "The Nike Air Force 1 is a true icon in the sneaker world. It's been a staple since its debut in 1982 and continues to be a popular choice for people of all ages and styles. Here's what you need to know about the Air Force 1",
      imageUrl:
        "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "fashion",
    });
    server.create("item", {
      id: "18",
      name: "Samsung S9",
      price: 199,
      description:
        "Buy the Samsung Galaxy S9 64GB (Unlocked) in Lilac Purple. Discover the reimagined camera with Dual Aperture lens, 960 fps slo-mo on a 5.8 inch infinity",
      imageUrl:
        "https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cat: "phone",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/items", (schema, request) => {
      return schema.items.all();
    });

    this.get("/items/:id", (schema, request) => {
      const id = request.params.id;
      return schema.items.find(id);
    });

    this.get("/category/items", (schema, request) => {
      return schema.items.where({ cat: "phone" });
    });

    this.get("/category/items/fashion", (schema, request) => {
      return schema.items.where({ cat: "fashion" });
    });
    this.get("/category/items/electronic", (schema, request) => {
      return schema.items.where({ cat: "electronic" });
    });

    this.get("/category/items/:id", (schema, request) => {
      const id = request.params.id;
      return schema.items.where({ id, cat: "phone" });
    });
  },
});
