const API_URL = process.env.REACT_APP_API_URL;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;


const getData = async (page, size=30, isPagination= true) => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
    
        const response = await fetch(
          `${API_URL}?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}&isPagination=${isPagination}&size=${size}&page=${page}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
            signal: controller.signal,
          }
        );
    
        clearTimeout(timeoutId);
    
        if (!response.ok) {
          if (response.status === 404) throw new Error("Помилка 404: Дані не знайдено");
          if (response.status === 500) throw new Error("Помилка 500: Внутрішня помилка сервера");
          throw new Error(`HTTP-помилка! Код: ${response.status}`);
        }
    
        const data = await response.json();
    
    
        if (!data || !data.projects || !Array.isArray(data.projects)) {
          throw new Error("Помилка у відповіді API: некоректний формат даних");
        }
    
        return data.projects;
      } catch (error) {
        if (error.name === "AbortError") {
          console.error("Помилка: Таймаут запиту (10 сек)");
          throw new Error("Сервер не відповідає");
        }
        console.error("Помилка при отриманні даних:", error);
        throw error;
      }
  };

  export default getData;