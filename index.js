var debug = require('debug')('downgrade')

module.exports = function downgrade (uid, gid) {
  if (!uid) uid = 'www-data'
  if (!gid) gid = uid

  try {
    process.setgid(gid)
    process.setuid(uid)
    debug(
      'Downgraded gid: uid=%s (desired=%s); gid=%s (desired=%s)',
      process.getuid(), uid, process.getgid(), gid
    )
  } catch (err) {
    var currentUid = (process.getuid && process.getuid()) || 'none'
    var currentGid = (process.getgid && process.getgid()) || 'none'
    debug(
      'Failed to downgrade: uid=%s (desired=%s); gid=%s (desired=%s)',
      currentUid, uid, currentGid, gid
    )
  }
}
