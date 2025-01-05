import { AboutMe } from '../model/aboutme';
import { Project } from '../model/project';

export const mockLogin = (userName: string, password: string) =>
  new Promise<TokenResponse>(function (resolve, rejected) {
    setTimeout(() => {
      if (userName === 'admin@davidmolinaojeda.com' && password === 'Bankai#2025') {
        resolve(
          JSON.parse(
            `{"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODg0YmJiM2Q0YTRkNDk1ZDYyNGJhYyIsImVtYWlsIjoibHVjYXNmZXJuYW5kZXphcmFnb25AZ21haWwuY29tIiwiaWF0IjoxNjM2MzIyMzA3LCJleHAiOjE2MzYzMjU5MDd9.yxy7uKWXJx5rY8znRBTg5182llyH8Rs9R8C6_SM4LIg" }`
          )
        );
      } else {
        rejected(new Unauthorized());
      }
    }, 2000);
  });
export interface TokenResponse {
  token: string;
}
export interface ApiError {
  description?: string;
}
export class Unauthorized implements ApiError {}

export interface DashboardInfo {
  aboutMe: AboutMe;
  projects: Project[];
}

export const mockFetchDashboard = () =>
  Promise.all([mockAboutme(), mockProjects()]).then(([aboutMe, projects]) => {
    return {
      aboutMe,
      projects
    };
  });

export const mockAboutme = () =>
  new Promise<AboutMe>(function (resolve) {
    setTimeout(() => {
      resolve(
        JSON.parse(
          `{
            "id":"072511DLMO",
            "name":"David L. Molina Ojeda",
            "birthday":437034180000,
            "nationality":"Perú",
            "job":"Telefónica del Perú",
            "github":"https://github.com/dlmo18"
            }`
        )
      );
    }, 500);
  });

export const mockProjects = () =>
  new Promise<Project[]>(function (resolve) {
    setTimeout(() => {
      resolve(
        JSON.parse(
          `[
                {
                "id":"12349as8df90",
                "title":"Tarjeta Cencosud",
                "description":"Desarrollado en Wordpress con un gestor de contenidos",
                "version":"2.25",
                "link":"https://www.tarjetacencosud.pe/",
                "tag":"Wordpress, Portal Web",
                "timestamp":"765817712000"
                },
                {
                "id":"12349as8df90",
                "title":"Dia D Juegos Perú",
                "description":"Tienda en linea para compra de juegos de mesa en Perú",
                "version":"2.24",
                "link":"https://diadejuegos.com/",
                "tag":"Prestashop, Ecommerce",
                "timestamp":"765817712000"
                },
                {
                "id":"12349as8df90",
                "title":"Weleda",
                "description":"Tienda en linea para compra de productos de cuidado personal",
                "version":"6.6",
                "link":"http://weleda.com.pe/",
                "tag":"Woocomerce, Ecommerce",
                "timestamp":"765817712000"
                },
                {
                "id":"12349as8df90",
                "title":"CuboRojo",
                "description":"Portal web de una agencia digital",
                "version":"1.24",
                "link":"https://cuborojo.pe/",
                "tag":"Wordpress, Portal Web",
                "timestamp":"765817712000"
                },               
                {
                "id":"12349as8df90",
                "title":"Zona ARIS",
                "description":"Intranet de empleados con un REST API para servicios en portla web y móvil",
                "version":"4.24",
                "link":"https://zona.aris.com.pe/",
                "tag":"Angular, Yii",
                "timestamp":"765817712000"
                },
                {
                "id":"12349as8df90",
                "title":"Plin",
                "description":"Portal publico que tambien cuenta con un REST API para dar sooporte a campañas y juegos",
                "version":"2.24",
                "link":"https://plin.com.pe/",
                "tag":"Wordpress, Rest API",
                "timestamp":"765817712000"
                }                
            ]`
        )
      );
    }, 500);
  });

  export const mockProjectInput = ( data : any = null ) =>
    new Promise<Project[]>(function (resolve) {
      setTimeout(() => {

        let now= Date.now()
        resolve(
          [
            {
            "_id"         : 'qwerty' + now,
            "title"       : data?.title,
            "description" : data?.description,
            "version"     : data?.version,
            "link"        : data?.link,
            "tags"         : data?.tags,
            "timestamp"   : now
            } 
          ]
        )
      }, 500);
  });
  