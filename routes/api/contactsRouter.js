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

const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { addSchema, updateSchema, updateFavoriteSchema } = require('../../schemas/contactsSchema');

router.get('/', authenticate, getContacts);

router.get('/:contactId', authenticate, isValidId, getContactById);

router.post('/', authenticate, validateBody(addSchema), addContact);

router.delete('/:contactId', authenticate, isValidId, removeContact);

router.put('/:contactId', authenticate, isValidId, validateBody(updateSchema), updateContact);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
