function parseCount(meaning) {
    const parsedValue = Number.parseFloat(meaning);
    if (isNaN(parsedValue)) throw new Error("Невалидное значение");
    return parsedValue;
  }
  
  function validateCount(meaning) {
    
    try {
      return parseCount(meaning);
    }
    catch(error) {
      return error;
    }
    
  }
  
  class Triangle {
    constructor(a, b, c) {
      if ((a + b) < c || (a + c) < b || (c + b) < a) throw new Error("Треугольник с такими сторонами не существует");
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = 0.5 * this.perimeter;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return Number(area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }