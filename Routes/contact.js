// require express
const express = require("express");
const res = require("express/lib/response");
const { AddContact } = require("../controllers/contact.controllers");
const Contact = require("../Model/Contact");

const router = express.Router();

// test
router.get("/test", (req, res) => {
  res.send("hello i test...");
});

/***
 * @desc : add new contact
 * @method : POST
 * @PATH : "http://localhost:5000/api/contact"
 * @data : req.body
 */

router.post("/", AddContact);

/***
 * @desc : get new contact
 * @method : Get
 * @PATH : "http://localhost:5000/api/contact"
 * @data : no data
 */

router.get("/", getAllContacts);
/***
 * @desc : get one contact
 * @method : GET
 * @PATH : "http://localhost:5000/api/contact/:id"
 * @data : req.params
 */

router.get("/:id", getOneContact);

/***
 * @desc : Delete contact
 * @method : DELETE
 * @PATH : "http://localhost:5000/api/contact"
 * @data : req.params
 */

router.delete("/:_id", DeleteContact);

/***
 * @desc : Update contact
 * @method : PUT
 * @PATH : "http://localhost:5000/api/contact"
 * @data : req.body && req.params
 */

router.updateOne("/:_id", UpdateContact);

module.exports = router;
