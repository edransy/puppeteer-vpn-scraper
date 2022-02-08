const { sleep } = require("./sleep");

const escapeXpathString = str => {
    const splitedQuotes = str.replace(/'/g, `', "'", '`);
    return `concat('${splitedQuotes}', '')`;
  };
  

const clickByText = async (page, text, position) => {
    const escapedText = escapeXpathString(text);
    const linkHandlers = await page.$x(`//*[contains(text(), ${escapedText})]`);
    console.log(linkHandlers.lenght);
    clickMe = linkHandlers[position];

    if(clickMe !== undefined){  
      await clickMe.click();
      console.log(clickMe);
    }
};



const clickCheckboxByTest = async (page, text, cursor) => {
    const escapedText = escapeXpathString(text);
    const [clickMe] = await page.$x(`//*[contains(text(), ${escapedText})]/ancestor::tr/td[1]/input[@type="checkbox"]`);
    
    if(!(await clickMe.isIntersectingViewport())) {
      await page.evaluate((element) => { element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});}, clickMe);
    }
    
    
    const cursorStart = await cursor.moveTo({ x: 5, y: 5 });
    const resultclickMe = await cursor.click(clickMe);
    console.log(clickMe);

}


const clickById = async (page, id) => {
  const select = `[id="${id}"]`
  const clickMe = await page.$(select);

  console.log(id)
  
  if (!(await clickMe.isIntersectingViewport())) {
    await page.evaluate((element) => { element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"}); }, clickMe);
  }

  const clickPoint = await clickMe.clickablePoint();
  const integerclickPoint = {
    x: parseInt(clickPoint.x, 10),
    y: parseInt(clickPoint.y, 10),
  };

  await clickMe.click();
  console.log({ resultclickMe });
};


module.exports = {clickById, clickByText, clickCheckboxByTest};