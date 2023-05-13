const Report = require('../models/Report.js');

exports.allReports = async (req, res) => {

    const reports = await Report.findAll();

    if (reports.length > 0){
        res.status(200).json(reports);
    }else{
        res.status(400).json({message: "Not Found Reports"});
    }

}

exports.oneReport = async(req, res) => {
    let id_report = req.params.id_report;

    const report = await Report.findOne({
        where: {
            id_report: id_report,
        },
    });

    if (report){
        res.status(200).json(report);
    }else{
        res.status(404).json({message: "Not found report"})
    }
};

exports.createReport = async(req, res) => {

    let reqReport = req.body;

    await Report.create(reqReport)
    .then((success) => {
        res.status(200).json({message: success});
    })
    .catch((error) => {
        res.status(500).json({message: `error creating report ${error}`});
    })
};

exports.updatedReport = async(req, res) => {
    let id_report = req.params.id_report;
    let reqreport = req.body

    await Report.update(reqreport, {
        where: {
            id_report: id_report
        },
    }).then((success) => {
        if (success > 0){
            res.status(200).json(reqreport);
        }else{
            res.status(404).json({message: "Not found report"});
        }
    })
    .catch((error) => {
        res.status(500).json({message: `Error updating report ${error}`});
    })
};

exports.deleteReport = async(req, res) => {
    let id_report = req.params.id_report;

    await Report.destroy({
        where: {
            id_report: id_report
        }
    }).then(success => {
        if (success != 0){
            res.status(200).json({message: "Report deleted"});
        }else{
            res.status(200).json({message: "Report does not exist"})
        }
    }).catch((error) =>{
        res.status(500).json(error);
    })
}

