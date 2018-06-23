if (PATH_TO_THE_REPO_PATH_UTILS_FILE === undefined) PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/highfidelity/hifi_tests/master/tests/utils/branchUtils.js"
Script.include(PATH_TO_THE_REPO_PATH_UTILS_FILE);
var autoTester = createAutoTester(Script.resolvePath("."));

autoTester.perform("Haze - partially visible sky", Script.resolvePath("."), "secondary", function(testType) {
    // Test material matrix
    Script.include("../setup.js?raw=true")

    var HAZE = {
        hazeRange: 500.0,
        hazeBaseRef: MyAvatar.position.y,
        hazeColor: { red: 153, green: 107, blue: 47 },
        hazeBackgroundBlend: 0.5
    };

    // Setup
    var createdEntities;
    autoTester.addStep("Setup", function () {
        createdEntities = setup(HAZE, autoTester.getOriginFrame());
    });

    autoTester.addStepSnapshot("Haze with sky partially visible");

    autoTester.addStep("Clean up after test", function () {
        for (var i = 0; i < createdEntities.length; i++) {
            Entities.deleteEntity(createdEntities[i]);
        }
    });

    var result = autoTester.runTest(testType);
});
