import * as express from 'express'
import { getToken, requestValidator } from '../middlewares'
import { admin } from '../utils/firebase'
import { onlyAdmin } from '../utils/authorization'
import { roleUpdateSchema } from './model'
import { ErrorHandler } from '../middlewares/error'

export const route = express.Router()

route.post(
  '/role/:uid',
  [getToken, onlyAdmin, requestValidator({ body: roleUpdateSchema })],
  async (req, res, next) => {
    try {
      const data = req.body
      const uid = req.params.uid

      const customClaims = {
        role: data.newRole
      }

      await admin.auth().setCustomUserClaims(uid, customClaims)
      res.status(204).send()
    } catch (error) {
      next(new ErrorHandler(500, 'User role change error', error))
    }
  }
)
