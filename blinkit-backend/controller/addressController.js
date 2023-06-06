import { Address } from "../model/addressModel.js";

export const addAddress = async (req, res, next) => {
  const { userid, setas, receiver, flat, street } = req.body;

  const obj = {
    set_as: setas,
    receiver: receiver,
    flat: flat,
    street: street,
  };

  const user = await Address.findOne({ user_id: userid });

  if (user) {
    user.addresses.push(obj);
    await user.save();
  } else {
    await Address.create({
      user_id: userid,
      addresses: [obj],
    });
  }

  res.status(201).json({
    success: true,
    new_address: obj,
  });
};

export const getAddresses = async (req, res, next) => {
  const userid = req.params.id;

  const addresses = await Address.findOne({ user_id: userid });

  res.json({
    success: true,
    addresses,
  });
};

export const updateAddress = async (req, res, next) => {
  const userid = req.params.id;
  const { selected_ind, setas, receiver, flat, street } = req.body;

  let updated_prod = await Address.findOneAndUpdate(
    { user_id: userid, "addresses._id": selected_ind },
    {
      $set: {
        "addresses.$.set_as": setas,
        "addresses.$.receiver": receiver,
        "addresses.$.flat": flat,
        "addresses.$.street": street,
      },
    },
    { new: true, runValidators: true, usefindandModify: false }
  );

  res.json({
    success: true,
    message: "Product Updated Successfully",
    updated_prod
  });
};
