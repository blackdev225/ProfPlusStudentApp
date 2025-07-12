import React, { useState } from 'react';
import { BookOpen, Users, Calendar, BarChart3, FileText, MessageCircle, Home, User, Settings, Search, Bell, Clock, CheckCircle, AlertCircle, Play, Upload, Camera } from 'lucide-react';

const ProfPlusStudentApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
type Subject = {
  id: string;
  name: string;
  icon: string;
  color: string;
  progress: number;
};

const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [showExercise, setShowExercise] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showHomeworkUpload, setShowHomeworkUpload] = useState(false);

  const subjects = [
    { id: 'math', name: 'Mathématiques', icon: '📐', color: 'bg-blue-500', progress: 75 },
    { id: 'french', name: 'Français', icon: '📚', color: 'bg-green-500', progress: 60 },
    { id: 'physics', name: 'Physique', icon: '⚡', color: 'bg-purple-500', progress: 45 },
    { id: 'chemistry', name: 'Chimie', icon: '🧪', color: 'bg-orange-500', progress: 80 },
    { id: 'history', name: 'Histoire', icon: '🏛️', color: 'bg-red-500', progress: 55 },
    { id: 'english', name: 'Anglais', icon: '🇬🇧', color: 'bg-indigo-500', progress: 90 }
  ];

  const chapters = {
    math: [
      { id: 'eq2', name: 'Équations du second degré', lessons: 5, exercises: 12, completed: true },
      { id: 'func', name: 'Fonctions linéaires', lessons: 4, exercises: 8, completed: false },
      { id: 'geo', name: 'Géométrie dans l\'espace', lessons: 6, exercises: 15, completed: false }
    ]
  };

  const exercises = [
    {
      id: 1,
      question: "Résoudre l'équation : x² - 5x + 6 = 0",
      type: "mcq",
      options: ["x = 2 et x = 3", "x = 1 et x = 6", "x = -2 et x = -3", "Pas de solution"],
      correct: 0
    },
    {
      id: 2,
      question: "Calculer le discriminant de l'équation : 2x² - 7x + 3 = 0",
      type: "mcq",
      options: ["Δ = 25", "Δ = 49", "Δ = 1", "Δ = 35"],
      correct: 0
    }
  ];

  const recentActivity = [
    { subject: 'Mathématiques', action: 'Exercice terminé', time: '2h', score: 85 },
    { subject: 'Français', action: 'Cours consulté', time: '1j', score: null },
    { subject: 'Physique', action: 'Devoir corrigé', time: '2j', score: 78 },
  ];

  const upcomingAppointments = [
    { subject: 'Mathématiques', teacher: 'M. Kouakou', date: 'Demain 16h', type: 'video' },
    { subject: 'Français', teacher: 'Mme Diabaté', date: 'Vendredi 14h', type: 'chat' }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header avec statistiques */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Bonjour, Kouadio ! 👋</h2>
        <p className="text-blue-100">Continuons votre apprentissage aujourd'hui</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white/20 p-3 rounded-lg">
            <div className="text-sm text-blue-100">Temps aujourd'hui</div>
            <div className="text-xl font-bold">2h 30min</div>
          </div>
          <div className="bg-white/20 p-3 rounded-lg">
            <div className="text-sm text-blue-100">Exercices terminés</div>
            <div className="text-xl font-bold">12</div>
          </div>
          <div className="bg-white/20 p-3 rounded-lg">
            <div className="text-sm text-blue-100">Score moyen</div>
            <div className="text-xl font-bold">82%</div>
          </div>
        </div>
      </div>

      {/* Progression par matière */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Progression par matière
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {subjects.map(subject => (
            <div key={subject.id} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                 onClick={() => {setSelectedSubject(subject); setActiveTab('subjects');}}>
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 ${subject.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                  {subject.icon}
                </div>
                <div>
                  <div className="font-medium">{subject.name}</div>
                  <div className="text-sm text-gray-500">{subject.progress}% terminé</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${subject.color} h-2 rounded-full transition-all duration-300`} 
                     style={{width: `${subject.progress}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activité récente */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Activité récente
        </h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${activity.score !== null ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                <div>
                  <div className="font-medium">{activity.subject}</div>
                  <div className="text-sm text-gray-500">{activity.action}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">{activity.time}</div>
                {activity.score && <div className="text-sm font-medium text-green-600">{activity.score}%</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rendez-vous à venir */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Prochains rendez-vous
        </h3>
        <div className="space-y-3">
          {upcomingAppointments.map((appointment, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="font-medium">{appointment.subject}</div>
                  <div className="text-sm text-gray-500">{appointment.teacher}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{appointment.date}</div>
                <div className="text-xs text-gray-500">{appointment.type === 'video' ? 'Visioconférence' : 'Chat'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSubjects = () => (
    <div className="space-y-6">
      {!selectedSubject ? (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Matières</h2>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Rechercher une matière..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map(subject => (
              <div key={subject.id} 
                   className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-200"
                   onClick={() => setSelectedSubject(subject)}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${subject.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                    {subject.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{subject.name}</h3>
                    <p className="text-gray-500 text-sm">{subject.progress}% terminé</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Progression</span>
                    <span className="font-medium">{subject.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${subject.color} h-2 rounded-full transition-all duration-300`} 
                         style={{width: `${subject.progress}%`}}></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500">
                  <span>15 cours</span>
                  <span>42 exercices</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedSubject(null)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ←
            </button>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${selectedSubject.color} rounded-lg flex items-center justify-center text-white`}>
                {selectedSubject.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{selectedSubject.name}</h2>
                <p className="text-gray-500">Niveau Terminale</p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-4">
            {(chapters[selectedSubject.id] || []).map(chapter => (
              <div key={chapter.id} 
                   className="bg-white rounded-xl p-6 shadow-sm border-2 border-transparent hover:border-blue-200 cursor-pointer"
                   onClick={() => setSelectedChapter(chapter)}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">{chapter.name}</h3>
                  {chapter.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                  )}
                </div>
                
                <div className="flex gap-6 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {chapter.lessons} cours
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {chapter.exercises} exercices
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    onClick={(e) => {e.stopPropagation(); /* Ouvrir le cours */}}
                  >
                    <Play className="w-4 h-4" />
                    Commencer le cours
                  </button>
                  <button 
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={(e) => {e.stopPropagation(); setShowExercise(true);}}
                  >
                    Faire les exercices
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderExercises = () => (
    <div className="space-y-6">
      {!showExercise ? (
        <>
          <h2 className="text-2xl font-bold">Exercices</h2>
          <div className="grid gap-4">
            {subjects.map(subject => (
              <div key={subject.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 ${subject.color} rounded-lg flex items-center justify-center text-white text-sm`}>
                      {subject.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{subject.name}</h3>
                  </div>
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => setShowExercise(true)}
                  >
                    Commencer
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  42 exercices disponibles • Score moyen: {subject.progress}%
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => setShowExercise(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ←
            </button>
            <div className="text-center">
              <h2 className="text-xl font-bold">Exercice Mathématiques</h2>
              <p className="text-gray-500">Question {currentQuestion + 1} sur {exercises.length}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Temps restant</div>
              <div className="text-lg font-bold">15:30</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">{exercises[currentQuestion].question}</h3>
              
              <div className="space-y-3">
                {exercises[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full p-4 text-left border rounded-lg transition-colors ${
                      answers[currentQuestion] === index 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setAnswers({...answers, [currentQuestion]: index})}
                  >
                    <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              >
                Précédent
              </button>
              <button 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => {
                  if (currentQuestion < exercises.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                  } else {
                    // Soumettre l'exercice
                    alert('Exercice terminé !');
                    setShowExercise(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }
                }}
              >
                {currentQuestion === exercises.length - 1 ? 'Terminer' : 'Suivant'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderHomework = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Correction de devoirs</h2>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          onClick={() => setShowHomeworkUpload(true)}
        >
          <Upload className="w-4 h-4" />
          Nouveau devoir
        </button>
      </div>
      
      {!showHomeworkUpload ? (
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Devoir de Mathématiques</h3>
                <p className="text-gray-500">Soumis il y a 2 heures</p>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                En cours de correction
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Équations du second degré - Exercices 1 à 5
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Devoir de Français</h3>
                <p className="text-gray-500">Soumis il y a 1 jour</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Corrigé
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Dissertation sur "L'Étranger" de Camus
            </div>
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold text-green-600">16/20</div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Voir la correction
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <button 
              onClick={() => setShowHomeworkUpload(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ←
            </button>
            <h3 className="text-xl font-bold">Soumettre un devoir</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Matière</label>
              <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sélectionner une matière</option>
                {subjects.map(subject => (
                  <option key={subject.id} value={subject.id}>{subject.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Titre du devoir</label>
              <input 
                type="text" 
                placeholder="Ex: Exercices sur les équations du second degré"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Télécharger votre devoir</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Upload className="w-12 h-12 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">Glisser-déposer vos fichiers ici</p>
                    <p className="text-gray-500">ou cliquer pour parcourir</p>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Parcourir
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      Prendre une photo
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-4">
              <button 
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setShowHomeworkUpload(false)}
              >
                Annuler
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Soumettre le devoir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return renderDashboard();
      case 'subjects': return renderSubjects();
      case 'exercises': return renderExercises();
      case 'homework': return renderHomework();
      case 'appointments': return (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Rendez-vous</h3>
          <p className="text-gray-500">Gérez vos rendez-vous avec les professeurs</p>
        </div>
      );
      case 'progress': return (
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Statistiques</h3>
          <p className="text-gray-500">Suivez votre progression détaillée</p>
        </div>
      );
      default: return renderDashboard();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">ProfPlus</h1>
          <p className="text-gray-500 text-sm">Élève</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', label: 'Tableau de bord', icon: Home },
            { id: 'subjects', label: 'Matières', icon: BookOpen },
            { id: 'exercises', label: 'Exercices', icon: FileText },
            { id: 'homework', label: 'Devoirs', icon: Upload },
            { id: 'appointments', label: 'Rendez-vous', icon: Calendar },
            { id: 'progress', label: 'Progression', icon: BarChart3 },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            Paramètres
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold capitalize">
                {activeTab === 'dashboard' ? 'Tableau de bord' : 
                 activeTab === 'subjects' ? 'Matières' :
                 activeTab === 'exercises' ? 'Exercices' :
                 activeTab === 'homework' ? 'Devoirs' :
                 activeTab === 'appointments' ? 'Rendez-vous' :
                 activeTab === 'progress' ? 'Progression' : activeTab}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  KA
                </div>
              </button>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default ProfPlusStudentApp;