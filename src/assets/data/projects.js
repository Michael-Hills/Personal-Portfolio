import Skiing from '../images/freestyle-skiing.jpg';
import GreenCtgImg from '../images/customer-support.jpg';
import Mythology from '../images/mythology.jpg';
import Portfolio from '../images/hero_col.jpg';
import Colab from '../images/colab.jpg';


const projectData = [
  {
    id: 1,
    img: Skiing,
    title: 'Freestyle Skiing Fall Detection',
    short_category: ['AI/ML'],
    long_category: ['AI/ML', 'Deep Learning', 'Time Series','Computer Vision', 'Classification'],
    short_desc: 'A deep learning-based system to detect falls in freestyle skiing using sensor data and neural networks to distinguish between intentional tricks and actual falls.',
    long_desc: 'The project focuses on creating a fall detection system specifically for freestyle skiing, addressing the limitations of traditional systems which often misclassify intentional tricks as falls. It investigates the effectiveness of deep learning methods in this unique, high-impact domain, using both image-based models (such as AlexNet and ResNet50 with Gramian Angular Field visualisations) and raw signal-based models (like LSTM and CNN-LSTM). The study involved collecting a bespoke dataset of accelerometer and gyroscope data from skiers, alongside using the SDSU dataset for transfer learning, and implemented various preprocessing techniques including filtering, normalization, and segmentation. \n\n Through comparative analysis, the project found that the ResNet50 image-based model achieved the highest accuracy (92%), while the CNN-LSTM signal-based model also performed well with 91% accuracy. The study highlighted trade-offs between performance and computational demands, with the ResNet50 offering better classification at the cost of speed and resource usage. signals. Ultimately, the system demonstrated strong potential for enhancing skier safety by enabling faster and more reliable fall detection.',
    tech_stack: ['Python', 'PyTorch','TensorFlow'],
    githubLink: 'https://github.com/Michael-Hills/Freestyle-Skiing-Fall-Detection',
    reportLink: 'https://raw.githubusercontent.com/Michael-Hills/Freestyle-Skiing-Fall-Detection/main/Report.pdf'
  },
  {
    id: 2,
    img: Mythology,
    title: 'Mythology Semantic Clustering',
    short_category: ['AI/ML'],
    long_category: ['AI/ML','NLP', 'Deep Learning', 'Web Scraping','Clustering'],
    short_desc: 'I also develop the websites. I create high performance website with blazing fast speed.',
    long_desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna tempor pulvinar vivamus fringilla lacus nec metus. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Purus est efficitur laoreet mauris pharetra vestibulum fusce. Ligula congue sollicitudin erat viverra ac tincidunt nam. Cras eleifend turpis fames primis vulputate ornare sagittis. Cubilia curae hac habitasse platea dictumst lorem ipsum. Tempus leo eu aenean sed diam urna tempor. Taciti sociosqu ad litora torquent per conubia nostra. Maximus eget fermentum odio phasellus non purus est. Finibus facilisis dapibus etiam interdum tortor ligula congue. Nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Cursus mi pretium tellus duis convallis tempus leo. Ut hendrerit semper vel class aptent taciti sociosqu. Eros lobortis nulla molestie mattis scelerisque maximus eget. Ante condimentum neque at luctus nibh finibus facilisis. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Vitae pellentesque sem placerat in id cursus mi. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Montes nascetur ridiculus mus donec rhoncus eros lobortis. Suspendisse aliquet nisi sodales consequat magna ante condimentum. Euismod quam justo lectus commodo augue arcu dignissim. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Nec metus bibendum egestas iaculis massa nisl malesuada. Natoque penatibus et magnis dis parturient montes nascetur. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Tincidunt nam porta elementum a enim euismod quam.',
    tech_stack: ['Python', 'BERT', 'Hugging Face','Beautiful Soup','UMAP', 'HDBSCAN'],
  },
  {
    id: 3,
    img: GreenCtgImg,
    title: 'Customer Support Analysis',
    short_category: ['AI/ML'],
    long_category: ['AI/ML','NLP', 'Deep Learning', 'Clustering'],
    short_desc: 'I develop mobile application. I create mobile app with eye catching ui.',
    long_desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna tempor pulvinar vivamus fringilla lacus nec metus. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Purus est efficitur laoreet mauris pharetra vestibulum fusce. Ligula congue sollicitudin erat viverra ac tincidunt nam. Cras eleifend turpis fames primis vulputate ornare sagittis. Cubilia curae hac habitasse platea dictumst lorem ipsum. Tempus leo eu aenean sed diam urna tempor. Taciti sociosqu ad litora torquent per conubia nostra. Maximus eget fermentum odio phasellus non purus est. Finibus facilisis dapibus etiam interdum tortor ligula congue. Nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Cursus mi pretium tellus duis convallis tempus leo. Ut hendrerit semper vel class aptent taciti sociosqu. Eros lobortis nulla molestie mattis scelerisque maximus eget. Ante condimentum neque at luctus nibh finibus facilisis. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Vitae pellentesque sem placerat in id cursus mi. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Montes nascetur ridiculus mus donec rhoncus eros lobortis. Suspendisse aliquet nisi sodales consequat magna ante condimentum. Euismod quam justo lectus commodo augue arcu dignissim. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Nec metus bibendum egestas iaculis massa nisl malesuada. Natoque penatibus et magnis dis parturient montes nascetur. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Tincidunt nam porta elementum a enim euismod quam.',
    tech_stack: ['Python', 'BERT', 'Hugging Face','UMAP', 'HDBSCAN'],
  },
  {
    id: 4,
    img: Portfolio,
    title: 'Personal Portfolio',
    short_category: ['Frontend'],
    long_category: ['Frontend', 'UI/UX', 'Web Development'],
    short_desc: 'I develop mobile application. I create mobile app with eye catching ui.',
    long_desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna tempor pulvinar vivamus fringilla lacus nec metus. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Purus est efficitur laoreet mauris pharetra vestibulum fusce. Ligula congue sollicitudin erat viverra ac tincidunt nam. Cras eleifend turpis fames primis vulputate ornare sagittis. Cubilia curae hac habitasse platea dictumst lorem ipsum. Tempus leo eu aenean sed diam urna tempor. Taciti sociosqu ad litora torquent per conubia nostra. Maximus eget fermentum odio phasellus non purus est. Finibus facilisis dapibus etiam interdum tortor ligula congue. Nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Cursus mi pretium tellus duis convallis tempus leo. Ut hendrerit semper vel class aptent taciti sociosqu. Eros lobortis nulla molestie mattis scelerisque maximus eget. Ante condimentum neque at luctus nibh finibus facilisis. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Vitae pellentesque sem placerat in id cursus mi. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Montes nascetur ridiculus mus donec rhoncus eros lobortis. Suspendisse aliquet nisi sodales consequat magna ante condimentum. Euismod quam justo lectus commodo augue arcu dignissim. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Nec metus bibendum egestas iaculis massa nisl malesuada. Natoque penatibus et magnis dis parturient montes nascetur. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Tincidunt nam porta elementum a enim euismod quam.',
    tech_stack: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 5,
    img: Colab,
    title: 'Colab Charity Internal System',
    short_category: ['Backend'],
    long_category: ['Backend', 'Web Development', 'API' ,'SQL'],
    short_desc: 'I develop mobile application. I create mobile app with eye catching ui.',
    long_desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna tempor pulvinar vivamus fringilla lacus nec metus. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Purus est efficitur laoreet mauris pharetra vestibulum fusce. Ligula congue sollicitudin erat viverra ac tincidunt nam. Cras eleifend turpis fames primis vulputate ornare sagittis. Cubilia curae hac habitasse platea dictumst lorem ipsum. Tempus leo eu aenean sed diam urna tempor. Taciti sociosqu ad litora torquent per conubia nostra. Maximus eget fermentum odio phasellus non purus est. Finibus facilisis dapibus etiam interdum tortor ligula congue. Nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Cursus mi pretium tellus duis convallis tempus leo. Ut hendrerit semper vel class aptent taciti sociosqu. Eros lobortis nulla molestie mattis scelerisque maximus eget. Ante condimentum neque at luctus nibh finibus facilisis. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Vitae pellentesque sem placerat in id cursus mi. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Montes nascetur ridiculus mus donec rhoncus eros lobortis. Suspendisse aliquet nisi sodales consequat magna ante condimentum. Euismod quam justo lectus commodo augue arcu dignissim. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Nec metus bibendum egestas iaculis massa nisl malesuada. Natoque penatibus et magnis dis parturient montes nascetur. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Tincidunt nam porta elementum a enim euismod quam.',
    tech_stack: ['Python', 'Django'],
  },
  // Add more project items as needed
];

export default projectData;
