export const createHtmlFile = (animalData) => {
    return (
        `<html>
            <head>
                <meta charset="utf-8">
                <title>${animalData.animal}</title>
            </head>
            <body>
                <h1>${animalData.animal}</h1>
                <img style="width:200px;height:200px;object-fit:cover;" src="${animalData.img}" alt="${animalData.animal}" />
                <p>${animalData.info}</p>
            </body>
        </html>`
    )
}
