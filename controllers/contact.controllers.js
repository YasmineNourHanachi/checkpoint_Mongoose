exports.AddContact = async (req, rest) => {
  try {
    const newContact = req.body;

    if (!newContact.name || newContact.email) {
      return res.status(400).send({ msg: " Name and Email required !!" });
    }
    const contactToFind = await Contact.findOne({ email: newContact.email });
    if (contactToFind) {
      return res.status(400).send({ msg: " Contact Already exist !!!" });
    }
    const contactToAdd = new Contact(newContact);
    await contactToAdd.save();

    res
      .status(200)
      .send({ msg: "Contact added succesfully...", contact: contactToAdd });
  } catch (error) {
    res.status(400).send({ msg: "Can't Add  new contact !!!! ", error });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send({ msg: "List of contacts : ", contacts });
  } catch (error) {
    res.status(400).send({ msg: "Can't get list of contacts !!!! ", error });
  }
};
exports.getOneContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contactToFind = await Contact.findOne({ _id: id });

    if (!contactToFind) {
      return res
        .status(400)
        .send({ msg: "Can't find contact with this id !!" });
    }

    res
      .status(200)
      .send({ msg: "I find the contact ..", contact: contactToFind });
  } catch (error) {
    res.status(400).send({ msg: "Can't get contact !!!! ", error });
  }
};

exports.DeleteContact = async (req, res) => {
  try {
    const { _id } = req.params;
    const contactToFind = await Contact.findOne({ _id });

    if (!contactToFind) {
      return res
        .status(400)
        .send({ msg: "Can't delete contact with this id !!" });
    }
    await Contact.deleteOne({ _id });

    res
      .status(200)
      .send({ msg: "Contact delete succesfullyp) ..", contact: contactToFind });
  } catch (error) {
    res.status(400).send({ msg: "Can't delete contact !!!! ", error });
  }
};

exports.UpdateContact = async (req, res) => {
  try {
    const { _id } = req.params;
    const newContact = req.body;
    const contactToFind = await Contact.findOne({ _id });

    if (!contactToFind) {
      return res
        .status(400)
        .send({ msg: "Can't Update  contact  with this id!!!!" });
    }
    const result = await Contact.updateOne(
      { _id },
      { $set: { ...newContact } }
    );

    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: "Contact Already Update !!!!" });
    }

    res.status(200).send({ msg: "Contact update succesfully .." });
  } catch (error) {
    res.status(400).send({ msg: "Can't Update  contact !!!! ", error });
  }
};
