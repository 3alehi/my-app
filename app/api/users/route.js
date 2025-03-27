export async function GET() {
    const firstNames = ["علی", "محمد", "حسین", "رضا", "مهدی", "سجاد", "امیر", "یاسین", "حسام", "کیان"];
    const lastNames = ["احمدی", "محمدی", "رضایی", "کاظمی", "جعفری", "مرادی", "حسینی", "کریمی", "نوری", "موسوی"];
  
    const users = Array.from({ length: 20 }).map((_, index) => ({
      id: index + 1,
      firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      image: "https://www.shohada.org/assets/styles/medium/public/media-images/1146208411.jpg?itok=j3Ik9qx0"
    }));
  
    return Response.json(users);
  }
  