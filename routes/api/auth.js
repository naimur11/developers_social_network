const express = require('express');
const router= express.Router();

//@route   api/auth
//@desc    test route
//@access  public
router.get('/', (request, response) => {
return response.send('test auth route');
})

module.exports = router;