const home = async (req, res) => {
  try {
    res.status(200).send("welocome to the new world");
  } catch (error) {
    console.log("error page");
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("welcome to register page again ");
  } catch (error) {
    console.log("error");
  }
};

module.exports = { home, register };
