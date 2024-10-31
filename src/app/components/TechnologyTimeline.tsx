import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws, FaGithub, FaDocker, FaFigma } from 'react-icons/fa';
import { Tooltip } from './Tooltip';

const technologies = [
    { icon: <FaReact />, name: 'React', description: 'Used for 2+ years in web projects' },
    { icon: <FaNodeJs />, name: 'Node.js', description: 'Backend projects and APIs' },
    { icon: <FaPython />, name: 'Python', description: 'Data science and automation' },
    { icon: <FaAws />, name: 'AWS', description: 'Deployment and cloud management' },
    { icon: <FaGithub />, name: 'GitHub', description: 'Source control and collaboration' },
    { icon: <FaDocker />, name: 'Docker', description: 'Containerization and DevOps' },
    { icon: <FaFigma />, name: 'Figma', description: 'UI/UX design tool' },
];

const TechnologyTimeline: React.FC = () => {
    return (
        <div className="w-full py-10 px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                {technologies.map((tech, index) => (
                    <Tooltip key={index} text={tech.description}>
                        <motion.div
                            className="relative flex flex-col items-center cursor-pointer p-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            whileHover={{ scale: 1.15 }}
                        >
                            <div className="text-5xl text-white mb-2">
                                {tech.icon}
                            </div>
                            <p className="text-xl font-semibold text-center text-white">{tech.name}</p>
                        </motion.div>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
};

export default TechnologyTimeline;
