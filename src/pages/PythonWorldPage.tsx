// PythonWorldPage.tsx
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`pythonworld-tabpanel-${index}`}
      aria-labelledby={`pythonworld-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => ({
  id: `pythonworld-tab-${index}`,
  "aria-controls": `pythonworld-tabpanel-${index}`,
});

const PythonWorldPage: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Python World Tabs"
        variant="fullWidth"
      >
        <Tab label="Core" {...a11yProps(0)} />
        <Tab label="AI" {...a11yProps(1)} />
        <Tab label="Web" {...a11yProps(2)} />
        <Tab label="API" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        Core Python tools, libraries, and fundamentals.
      </TabPanel>
      <TabPanel value={value} index={1}>
        AI workflows, models, and ML pipelines in Python.
      </TabPanel>
      <TabPanel value={value} index={2}>
        Web frameworks, backends, and frontends powered by Python.
      </TabPanel>
      <TabPanel value={value} index={3}>
        API design, integration, and microservices with Python.
      </TabPanel>
    </Box>
  );
};

export default PythonWorldPage;
