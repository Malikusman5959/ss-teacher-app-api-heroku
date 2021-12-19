const express = require("express");
const studentController = require("./../controller/SStduentController");
const studentRouter = express.Router();
// POST
// localhost:8000/v1/member

studentRouter.route("/student").post(studentController.addStudent);
//   .get(memberController.getAllMembers);

// POST
// localhost:8000/v1/member/12345

// studentRouter
//   .route("/member/:id")
//   .get(memberController.getMemeberByID)
//   .patch(memberController.updateMemberByID);
module.exports = studentRouter;












// // MALES
// https://pickaface.net/gallery/avatar/unr_female0_210902_1748_a507d0.png
// https://pickaface.net/gallery/avatar/unr_male123_210903_1557_3nf00.png
// https://pickaface.net/gallery/avatar/20160713_235749_1205_claus.png
// https://pickaface.net/gallery/avatar/unr_male333_210903_1156_a514xt.png
// https://pickaface.net/gallery/avatar/unr_male1_210902_1722_a4zsz3.png
// https://pickaface.net/gallery/avatar/unr_male0_210902_1706_a4z5wg.png
// https://pickaface.net/gallery/avatar/unr_submale0_210901_1919_3nbbh.png
// https://pickaface.net/gallery/avatar/unr_submale0_210901_1914_d4qh.png
// https://pickaface.net/gallery/avatar/unr_frank_210723_0312_a2o3yi.png
// https://pickaface.net/gallery/avatar/unr_timtim_210507_2246_s03muyq.png
// https://pickaface.net/gallery/avatar/unr_peng_210427_0927_a2g77b.png
// https://pickaface.net/gallery/avatar/unr_rhett_210421_2215_7rbwebl3.png
// https://pickaface.net/gallery/avatar/unr_xiaozhao_210413_1403_2sh5drb.png
// https://pickaface.net/gallery/avatar/unr_guustaf_210326_1708_a0d99b.png
// https://pickaface.net/gallery/avatar/unr_robbe_210326_1706_a0bo38.png
// https://pickaface.net/gallery/avatar/unr_ruben_210218_2004_9yt29z.png
// https://pickaface.net/gallery/avatar/unr_lud2_210128_1443_9xz4bk.png
// https://pickaface.net/gallery/avatar/unr_jozef_210128_0321_zsgz3.png
// https://pickaface.net/gallery/avatar/unr_lois_210125_1927_zrzaz.png
// https://pickaface.net/gallery/avatar/unr_benjamin_210125_1927_9xsft3.png
// https://pickaface.net/gallery/avatar/unr_fenna_210125_1852_3km4z.png
// https://pickaface.net/gallery/avatar/unr_milan_210121_1511_2rdtrde.png




// // FEMALES
// https://pickaface.net/gallery/avatar/unr_female111_210903_1136_a5287n.png
// https://pickaface.net/gallery/avatar/unr_female444_210903_1211_1bbb.png
// https://pickaface.net/gallery/avatar/unr_female0_210902_1748_2tdoley.png
// https://pickaface.net/gallery/avatar/unr_mariahelo_210427_2357_2sow4sa.png
// https://pickaface.net/gallery/avatar/unr_elliebellie_210326_1718_cz4s.png
// https://pickaface.net/gallery/avatar/unr_storm_210202_1611_7oim6nsj.png
// https://pickaface.net/gallery/avatar/unr_esma_210122_2105_9xs5b5.png
// https://pickaface.net/gallery/avatar/unr_fatima_210121_2027_rlwvt7x.png
// https://pickaface.net/gallery/avatar/unr_malda_210121_1931_rlwfyzg.png
// https://pickaface.net/gallery/avatar/unr_senna_210121_1503_rlu5p42.png
// https://pickaface.net/gallery/avatar/unr_dinsdag2_210119_1523_rlfyju6.png



