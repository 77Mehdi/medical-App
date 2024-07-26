import express from 'express'
import {createReview,getllReviews} from '../controller/reviewController.js'
import { authenticate, restrict } from '../auth/veriyfication.js'



const reviewRoute = express.Router({mergeParams:true})

reviewRoute.route('/').get(getllReviews).post(authenticate,restrict(["doctor"]),createReview)

export default reviewRoute