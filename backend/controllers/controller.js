const home = async (req, res) => {
  try {
    res.status(200).json({ message: "welocome to the new world" });
  } catch (error) {
    console.log("error page");
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: req.body });
  } catch (error) {
    console.log("error");
  }
};

module.exports = { home, register };
