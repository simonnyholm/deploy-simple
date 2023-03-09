# Dokumentation for Appen

Svendeprøve for Simon Nyholm Sørensen  
Marts 2023

## Denne app

Brug indholdet fra opgavebeskrivelsen. (hvad skal denne app kunne).

## Tech-stack

- **React** Hvad er react  
  Jeg har fordi stor community med mange pakker, omfattende dokumentatio, pakker, meget efterspurgt på arbejdsmarkedet

- **Tailwind** Hvad er tailwind  
  hurtigt at arbejde med end css - kode i samme komponenter, standardiseret, overskueligt og effektivt

-**Axios**

## perspektivering af mit stack ift andre muligheder (de store ting i vores app)

saml m angular:
man sidder med typescript: mindre tilgængeligt og mere rigidt
i angular er alle valg truffet
angular kan være svært at opdatere - er i modsætning til react ikke bagud kompatobel

## Skalerbarhed

veldokumenteret
codesplitteing i componenter

ift deploy: skaberbare tjenester (netlyfy, render.com)
cloud-flare

## Kode-eksempel

Jeg vil vise denne jeiwjf kode

DEnne kode gør dejiuh:

```javascript
export default function Profile() {
  return <h1>Profile</h1>;
}
```

Forklaring afd kode den gør dette og dette for at gøre dettte

Endnu et kode eksempel (som jeg gerne vil tale om):

```javascript
useEffect(() => {
  fetch("http://localhost:4000/api/v1/classes/" + id)
    .then((response) => {
      if (!response.ok) {
        throw Error("Vi kunne desværre ikke indlæse kursusinformationerne");
      }
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setClassDetail(data);
      setError(null);
    })
    .catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
}, [setClassDetail, setIsLoading, setError, id]);
```
