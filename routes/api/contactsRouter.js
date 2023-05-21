const express = require('express');
const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require('../../controllers/contactsControllers');

const router = express.Router();

const { validateBody, isValidId } = require('../../middlewares');
const { addSchema, updateSchema, updateFavoriteSchema } = require('../../schemas/contactsSchema');

router.get('/', getContacts);

router.get('/:contactId', isValidId, getContactById);

router.post('/', validateBody(addSchema), addContact);

router.delete('/:contactId', isValidId, removeContact);

router.put('/:contactId', isValidId, validateBody(updateSchema), updateContact);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
