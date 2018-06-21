// This is an automatically generated file, created by auto-tester on Jun 21 2018, 14:15

Script.include("https://raw.githubusercontent.com/highfidelity/hifi_tests/RC69/tests/utils/branchUtils.js");
var autoTester = createAutoTester(Script.resolvePath("."));

var repositoryPath = autoTester.getRepositoryPath();

if (typeof Test !== 'undefined') {
    Test.wait(10000);
};

autoTester.enableRecursive();
autoTester.enableAuto();

Script.include(repositoryPath + "engine/render/shadows/primaryCamera/normal/test.js");
Script.include(repositoryPath + "engine/render/shadows/primaryCamera/grazing/test.js");
Script.include(repositoryPath + "engine/render/shadows/primaryCamera/front/test.js");

autoTester.runRecursive();
